import { useState, useRef, useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchAnimalsAsync, selectAnimals } from "./animalsSlice";
import styles from "./Animals.module.css";

function Animals() {
  const dispatch = useAppDispatch();
  const animalsState = useAppSelector(selectAnimals);
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      dispatch(fetchAnimalsAsync());
    }
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <div>
      <div style={{ padding: 10 }}>
        <p>Animals</p>

        {animalsState.status === "loading" ? (
          <span role="contentinfo">Loading</span>
        ) : (
          <>
            {animalsState.animals.map((animal) => (
              <div key={animal.id} className={styles.table}>
                <span>{animal.id}</span>
                <span>{animal.name}</span>
                <span>{animal.lifespan}</span>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Animals;
