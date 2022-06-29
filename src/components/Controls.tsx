
export function Controls({ 

  counter,
  allSelected,
  handleButtonSelect, 
 }: { 
  
  counter: number;
  allSelected: boolean;
  handleButtonSelect: (select: boolean) => void;

}, 
 ) {


  return (
    <section className="controls">
      <p className="info">{counter} gentlemen pointing at you</p>
      <button className="button button--select" onClick={()=>handleButtonSelect(!allSelected)}>
        {allSelected? "Unselect all" : "Select all"}
      </button>
    </section>
  );
}
