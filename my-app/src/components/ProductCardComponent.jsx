import { Card,CardText,CardBody,CardTitle } from "reactstrap";

const ProductCardComponent = (props) =>{
    const {id, first_name,last_name,email}= props;
    return(
        <Card>
            <CardBody>
            <CardText>{id}</CardText>
            <CardTitle>{first_name}</CardTitle>
            <CardText>{last_name}</CardText>
            <CardText>{email}</CardText>
         
            </CardBody>
        </Card>
    );    
}

export default ProductCardComponent;

