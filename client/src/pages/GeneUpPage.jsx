import GeneUpForm from "../components/GeneUpForm";

export default function GenUpPage() {
  // fetch and display all Gene data
  // need to useEffect and useState
  // clear interval in the cleanup of our useEffect
  /* 4 reference -https://github.com/Tech-Educators/software-dev-022/blob/main/demos/week07/05-use-effect-advanced/src/components/Polling.jsx */
  return (
    <div>
      <GeneUpForm />
      {/* map through Genes and display */}
    </div>
  );
}
