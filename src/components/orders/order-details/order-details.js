import React,{Component} from 'react'
import './order-details.css'
import { connect } from 'react-redux'
import { closeDetails } from '../../../actions'

class OrderDetails extends Component{

    render(){
        
        const { serialNumber,closeDetails } = this.props

        if(serialNumber === null){
            return <div></div>
        }else{
            const {
                title,
                diagonal,
                manufacturer,
                illumination,
                dimensions } = serialNumber
    
            return(
                <div className='order-details'>
                    <button className='close' onClick={closeDetails}>
                        <i className="fa fa-times-circle-o" aria-hidden="true"/>
                    </button>
                    <span className='l d'>{title}</span>
                    <span className='l'>
                        <span className='characteristic'>Производитель :</span>
                        <span>{manufacturer}</span>
                    </span>
                    <span className='l'>
                        <span className='characteristic'>Диагональ экрана, дюймов:</span>
                        <span>{diagonal}</span>
                    </span>
                    <span className='l'>
                        <span className='characteristic'>Тип системы подсветки:</span>
                        <span>{illumination}</span>
                    </span>
                    <span className='l'>
                        <span className='characteristic'>Размеры, мм:</span>
                        <span>{dimensions}</span>
                    </span>
    
                    
                </div>
            )
        }
        
    }
}

const mapStateToProps = ({serialNumber}) =>{
    return { serialNumber}
}
const mapDispatchToProps =(dispatch) =>{
    return{
        closeDetails: () => dispatch(closeDetails()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(OrderDetails);