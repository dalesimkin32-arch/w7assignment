import { useEffect, useState } from "react";
import GeneNav from "../components/GeneNav";
import Gene from "../components/Gene";
import "./HomePage.css";
import { Await } from "react-router";

export default function HomePage() {
  // separated so can sort base page and moved following tasks here
  // fetch and display all Gene data
  // need to useEffect and useState
  const [genes, setGenes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(`https://w7assignment.onrender.com/usefulGenes`);
      const genesData = await data.json();
      setGenes(genesData);
    }
    // run the fetchData function every 5 seconds 5s a bit too long settled on 1s
    const intervalID = setInterval(fetchData, 1000);

    // clear interval in the cleanup of our useEffect
    return function () {
      clearInterval(intervalID);
    };
  }, []);

  /* 4 reference -https://github.com/Tech-Educators/software-dev-022/blob/main/demos/week07/05-use-effect-advanced/src/components/Polling.jsx */

  return (
    <div>
      <GeneNav />
      <h1>Gene Home</h1>
      {/* map through Genes and display */}
      <div className="Genes">
        {genes.map((gene) => {
          return (
            <Gene
              ListItem
              key={gene.gene_id} // stops a warning message in console re no key item (not recommended- but can use index as gene is an array)
              gene_name={gene.gene_name}
              application={gene.application}
              source_organism={gene.source_organism}
              image_description={gene.image_description}
              image_url={gene.image_url}
              primary_article_url={gene.primary_article_url}
            />
          );
        })}
      </div>
    </div>
  );
}

/* relevant data from DBase
    gene_name VARCHAR(100),
    application TEXT,
    source_organism VARCHAR(100),
    image_description TEXT,
    image_url TEXT,                  - mostly fails webpage urls not images so need re-sourcing
    primary_article_url TEXT         - added in to spawn a link to oen in new window if can
*/
