import React from 'react'
import moment from 'moment';

const Time = () => {
  const [duracao, setDuracao] = React.useState({
    openStart: moment("14:00", "HH:mm"),
    openEnd: moment("14:40", "HH:mm"),
    aulaStart: moment("16:20", "HH:mm"),
    aulaEnd: moment("18:00", "HH:mm"),
    closeStart: moment("19:40", "HH:mm"),
    closeEnd: moment("20:00", "HH:mm"),
  })
  const [calc, setCalc] = React.useState({
    dOpen: moment.duration(duracao.openEnd.diff(duracao.openStart)),
    dAula: moment.duration(duracao.aulaEnd.diff(duracao.aulaStart)),
    dClose: moment.duration(duracao.closeEnd.diff(duracao.closeStart)),
  })
  
  const handleChange = (e) => {
    const { name, value} = e.target
    setDuracao({...duracao, [name]: moment(value, "HH:mm")})
  }

  const handleClick = () => {
    setCalc({...calc, dOpen: moment.duration(duracao.openEnd.diff(duracao.openStart)), dAula: moment.duration(duracao.aulaEnd.diff(duracao.aulaStart)), dClose: moment.duration(duracao.closeEnd.diff(duracao.closeStart))})
  }
  
  return (
    <main>
        <fieldset className="open">
            <legend>Abertura</legend>
            <input type="time" name="openStart" id="openStart" value={duracao.openStart._i} onChange={handleChange} />
            <input type="time" name="openEnd" id="openEnd" value={duracao.openEnd._i} onChange={handleChange} />
            <p>Duracao da aula: {(calc.dOpen._milliseconds/1000/60)} minutos </p>
        </fieldset>
         <fieldset className="mid">
            <legend>Aula</legend>
            <input type="time" name="aulaStart" id="aulaStart" value={duracao.aulaStart._i} onChange={handleChange}/>
            <input type="time" name="aulaEnd" id="aulaEnd" value={duracao.aulaEnd._i} onChange={handleChange}/>
            <p>Duracao da aula: {(calc.dAula._milliseconds/1000/60)} minutos </p>
        </fieldset>
         <fieldset className="end">
            <legend>Fechamento</legend>
            <input type="time" name="closeStart" id="closeStart" value={duracao.closeStart._i} onChange={handleChange}/>
            <input type="time" name="closeEnd" id="closeEnd" value={duracao.closeEnd._i} onChange={handleChange}/>
            <p>Duracao da aula: {(calc.dClose._milliseconds/1000/60)} minutos</p>
        </fieldset>
        <section className="resut">
            <button className="btn" onClick={handleClick}>Calcular</button>
            <h1>{Math.floor(((calc.dOpen._milliseconds/1000/60) + (calc.dAula._milliseconds/1000/60) + (calc.dClose._milliseconds/1000/60))*0.2)} minutos</h1>
            <h5>Planeje-se!</h5>
        </section>
    </main>
  )
}

export default Time