import {TailSpin} from 'react-loader-spinner';
const Loader = () => {
  return (

    <TailSpin
  visible={true}
  height="60"
  width="60"
  color="#FF0000"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass=""
  />
  )
}

export default Loader
