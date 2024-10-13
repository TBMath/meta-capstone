import Pasta from '../images/pasta.jpg'
function CallToAction(){
    return(
        <div className="bg-slate-300 p-5 flex justify-evenly">
        <div>
        <h1 className="text-2xl font-sans font-bold">
            Come try our delicious means!
        </h1>
        <p className='pr-20'> "Experience the zesty flavors of the Mediterranean at Little Lemon—where every bite bursts with vibrant, lemon-kissed goodness! Come savor our fresh, hand-crafted dishes that bring the sunshine of the Mediterranean straight to Chicago."</p></div>
      <div>
      <img src={Pasta} alt="Pasta" width="500" height="600" className='rounded-lg'/>
      </div>
        </div>
    )
}
export default CallToAction