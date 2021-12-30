function Jumbotron(props)
{
return(
<>
<div className=" p-5  rounded jumbotron">
  {props.children}
</div>

</>
);
}
export default Jumbotron;