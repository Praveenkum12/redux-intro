import { useSelector } from 'react-redux';

function Customer() {
  const fullName = useSelector(state => state.customer.fullName);
  return <h1>Welcome, {fullName}</h1>;
}

export default Customer;
