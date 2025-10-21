/* import { useNavigate } from "react-router";  */
import { useState } from "react";
import { useNavigate } from "react-router";
import "./GeneUpForm.css";

export default function GeneUpForm() {
  const [formData, setFormData] = useState();
  let navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  }

  function handleSubmit(e) {
    e.preventDefault(); // stop page refreshing on form submit etc.
    // have the formData
    fetch(`https://w7assignment.onrender.com/usefulgenes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    // use useNavigate (onSuccess in form tag) to redirect user after the form is submitted
  }

  return (
    <form
      onSubmit={handleSubmit}
      onSuccess={() => {
        navigate("/");
      }}
    >
      {/* have the input names here be the same as the columns in your database */}
      {/* <label>Genome Name</label> */}
      <label for="gname">
        <h4>Gene Name:</h4>
      </label>
      <input
        id="gname"
        name="gene_name"
        placeholder="Gene Name"
        onChange={handleChange}
      />

      <label for="appl">Application of Use for Gene:</label>
      <input
        id="appl"
        name="application"
        placeholder="Application of Use for Gene"
        onChange={handleChange}
      />

      <label for="srcorg">Source Organism of Gene:</label>
      <input
        id="scrorg"
        name="source_organism"
        placeholder="Source Organism of Gene"
        onChange={handleChange}
      />

      <label for="idesc">Image of Use: Description:</label>
      <input
        id="idesc"
        name="image_description"
        placeholder="Image of Use: Description"
        onChange={handleChange}
      />

      <label for="iurl">Image of Use:</label>
      <input
        id="iurl"
        name="image_url"
        placeholder="Link to Image of Use"
        onChange={handleChange}
      />

      <label for="priart">Link to primary research article:</label>
      <input
        id="priart"
        name="primary_article_url"
        placeholder="Link to primary research article"
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

/*  DBase structure
    gene_name VARCHAR(100),
    application TEXT,
    source_organism VARCHAR(100),
    image_description TEXT,
    image_url TEXT,                  - seed mostly fails webpage urls not images so need re-sourcing
    primary_article_url TEXT         - added in to spawn a link to open in new window if can
*/
