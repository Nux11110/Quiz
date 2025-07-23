function MyInformation({
  id,
  name,
  email,
}: {
  id: number;
  name: string;
  email?: string;
}) {
  return (
    <div className="my-info">
      <h1 style={{ background: "black", color: "white" }}>My Information</h1>
      <p>Id : {id}</p>
      <p>Name : {name}</p>
      {email ? <p>Email : {email}</p> : <p>No Email Found</p>}
    </div>
  );
}

export default MyInformation;
