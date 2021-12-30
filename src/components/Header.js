import react from 'react'

const Header = (props) => {
    console.log(props)
    const student='yasmine'
    props.getData(student)
    return (
        <div>
            {props.studentName}
            <p>{props.job} </p>
            {/*props.alertFct()*/}
            {props.children}
            <button onClick={()=>props.alertFct('name')} > click me </button>
        </div>
    )
}

export default Header 