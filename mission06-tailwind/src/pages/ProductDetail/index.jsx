import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams(); // URL에서 상품 ID 가져오기

  return (
    <div>
      <h1>ProductDetail</h1>
      <h1>id: {id}</h1>
    </div>
  );
}
