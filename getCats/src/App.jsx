import { useState } from "react"
import useCatInfo from "./hooks/useCatInfo";
import Card from "./components/Card"
import Spinner from "./components/Spinner";
 
function App() {
  const { catInfo, loading, fetchCat } = useCatInfo();
  
  return (
    <>
      <div className="app">
        <header className="header">
          <p className="header__eyebrow">Feline Encyclopedia</p>
          <h1 className="header__title">Discover <em>Cat Breeds</em></h1>
          <p className="header__subtitle">Explore the world's most fascinating felines</p>
        </header>
 
        <button className="fetch-btn" onClick={fetchCat}>
          <span className="fetch-btn__icon">🐾</span>
          Discover a Cat
        </button>
 
        {loading
          ? <Spinner />
          : catInfo && (
            <Card
              name={catInfo.name || "Unknown"}
              image={catInfo.image || ""}
              character={catInfo.temperament || "N/A"}
              description={catInfo.description || ""}
              origin={catInfo.origin || "N/A"}
              lifeSpan={catInfo.life_span || ""}
              wikipedia={catInfo.wikipedia_url || ""}
              altNames={catInfo.alt_names || "None"}
            />
          )
        }
      </div>
    </>
  );
}
 
export default App;