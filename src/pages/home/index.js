import React, { useEffect, useState } from "react";

import api from "../../services/api";
import apiRequestBody from "./apiRequestBody";

import Focusable from "../../shared/components/spatial-navigation/Focusable";
import ParentOfFocusables from "../../shared/components/spatial-navigation/ParentOfFocusables";

import styles from "./styles.module.css";

const Home = (props) => {
  const [list, setList] = useState([]);
  // const [leftPosition, setLeftPosition] = useState(0);
  const [focusedId, setFocusedId] = useState("");

  useEffect(() => {
    const getData = async () => {
      const { data } = await api.post("/FindMedia", apiRequestBody, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setList(data.FindMediaResult.Movies);
    };
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <ParentOfFocusables focusTo="movie-0">
        {/* style={{ left: `-${leftPosition}px` }} */}
        <ul>
          {list.map((item, index) => (
            <li key={item.Id}>
              <Focusable
                focusKey={`movie-${index}`}
                onBecameFocused={(a, b, c) => {
                  // setLeftPosition(index * (130 + 10));
                  console.log(a);
                  console.log(b);
                  console.log(c);
                  console.log(`movie-${item.Id}`);
                  setFocusedId(`movie-${item.Id}`);
                }}
                onBecameBlurred={() => {
                  console.log(`out->movie-${item.Id}`);
                }}
              >
                <img
                  className={
                    focusedId === `movie-${item.Id}` ? styles.active : ""
                  }
                  src={item.Images[0].Url}
                  alt=""
                />
              </Focusable>
            </li>
          ))}
        </ul>

        <ul>
          {list.map((item, index) => (
            <li key={item.Id + "-2"}>
              <Focusable
                focusKey={`movie-${index}-2`}
                onBecameFocused={(a, b, c) => {
                  // setLeftPosition(index * (130 + 10));
                  console.log(a);
                  console.log(b);
                  console.log(c);
                  console.log(`movie-${item.Id}-2`);
                  setFocusedId(`movie-${item.Id}-2`);
                }}
                onBecameBlurred={() => {
                  console.log(`out->movie-${item.Id}-2`);
                }}
              >
                <img
                  className={
                    focusedId === `movie-${item.Id}-2` ? styles.active : ""
                  }
                  src={item.Images[0].Url}
                  alt=""
                />
              </Focusable>
            </li>
          ))}
        </ul>
        <footer className={styles.footer}>
          <Focusable
            focusKey={`icon-0`}
            onBecameFocused={() => {
              setFocusedId(`icon-0`);
            }}
          >
            <img
              className={focusedId === `icon-0` ? styles.active : ""}
              src="https://cdn4.iconfinder.com/data/icons/social-media-2146/512/25_social-256.png"
              alt=""
            />
          </Focusable>
          <Focusable
            focusKey={`icon-1`}
            onBecameFocused={() => {
              setFocusedId(`icon-1`);
            }}
          >
            <img
              className={focusedId === `icon-1` ? styles.active : ""}
              src="https://cdn4.iconfinder.com/data/icons/social-media-2146/512/25_social-256.png"
              alt=""
            />
          </Focusable>
          <Focusable
            focusKey={`icon-2`}
            onBecameFocused={() => {
              setFocusedId(`icon-2`);
            }}
          >
            <img
              className={focusedId === `icon-2` ? styles.active : ""}
              src="https://cdn4.iconfinder.com/data/icons/social-media-2146/512/25_social-256.png"
              alt=""
            />
          </Focusable>
          <Focusable
            className={focusedId === `icon-3` ? styles.active : ""}
            focusKey={`icon-3`}
            onBecameFocused={() => {
              setFocusedId(`icon-3`);
            }}
          >
            <img
              className={focusedId === `icon-3` ? styles.active : ""}
              src="https://cdn4.iconfinder.com/data/icons/social-media-2146/512/25_social-256.png"
              alt=""
            />
          </Focusable>
        </footer>
      </ParentOfFocusables>
    </div>
  );
};

export default Home;
