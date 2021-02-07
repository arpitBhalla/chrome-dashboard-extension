import * as React from "react";
import Typography from "@material-ui/core/Typography";

interface localQuote {
  time: number;
  quote: {
    value: string;
    author: string;
  };
}

const Quote = () => {
  const [quote, setQuote] = React.useState({
    value: "",
    author: "",
  });
  React.useEffect(() => {
    let localQuote: localQuote = JSON.parse(localStorage.getItem("localQuote"));
    if (!localQuote || localQuote.time > new Date().getTime()) {
      fetch("https://quotes.rest/qod?language=en", {
        headers: {
          accept: "application/json",
        },
        mode: "no-cors",
      })
        .then((res) => res.json())
        .then((res) => {
          setQuote(res?.contents?.quotes?.[0]?.quote);
          localStorage.setItem(
            "localQuote",
            JSON.stringify({
              time: new Date().getTime(),
              quote,
            })
          );
        })
        .catch((e) => {
          setQuote({
            author: "",
            value: "",
          });
        });
    } else {
      setQuote(localQuote?.quote);
    }
  }, []);
  return (
    <>
      <Typography variant="h4" color="primary">
        {quote?.author}
      </Typography>
    </>
  );
};

export default Quote;
