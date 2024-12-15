import TeachPoint from "./TeachPoint";

TeachPoint

export default function TeachingSection() {
    
const data = [
    {
        name:"Классика же:",
        text:"Особенности национальных форумов"
    },
    {
        name:"Классика же:",
        text:"Особенности национальных форумов"
    },
    {
        name:"Классика же:",
        text:"Особенности национальных форумов"
    },
  ]
    return (<section>
        <h3>Наш подход к обучению</h3>
        <ul>
          {data.map((d,i) => (
            <TeachPoint key={i} {...d}/>
          ))}
        </ul>  
      </section>)
}