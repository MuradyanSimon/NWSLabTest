import { useEffect, useState } from "react";

const CatImages = (props) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadIndex, setLoadIndex] = useState(0);

  const catId = props.match.params.category;

  const LoadMore = (initial) => {
    setLoading(true);
    let myHeaders = new Headers();
    myHeaders.append("x-api-key", "cb0af4f5-b816-4a85-9834-0a2cf513dd95");
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch(
      `https://api.thecatapi.com/v1/images/search?category_ids=${catId}&&limit=10&&page=${loadIndex}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setImages(initial?result:images.concat(result)))
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
    setLoadIndex(loadIndex + 1);
  };

  useEffect(() => {
    LoadMore(true);
        // eslint-disable-next-line
}, [catId]);
  return (
    <>
      {images.map((image) => (
        <div
          key={image.id + Math.random()}
          style={{
            width: "400px",
            height: "400px",
            display: "inline-block",
            margin: "5px",
          }}
        >
          <img
            src={image.url}
            alt={image.id}
            style={{ width: "100%", height: "100%" }}
          />{" "}
        </div>
      ))}
      <button type="button" disabled={loading} onClick={() => LoadMore()}>
        {" "}
        Load More...
      </button>
    </>
  );
};
export default CatImages;
