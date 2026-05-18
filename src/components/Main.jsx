import useAppData from "../hooks/useAppData";

function Main() {
    const { moviesList } = useAppData();

  return (
    <div>
        <p>{JSON.stringify(moviesList)}</p>
    </div>
  )
}
export default Main;