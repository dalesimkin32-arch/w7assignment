import GeneUpForm from "../components/GeneUpForm";
import GeneNav from "../components/GeneNav";

export default function GeneUpPage() {
  return (
    <div>
      <GeneNav />
      <h1>Add a Gene to Gene Home</h1>
      <GeneUpForm />
    </div>
  );
}
