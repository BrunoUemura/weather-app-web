import './styles.scss';

import { TailSpin } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div className="loader-container">
      <TailSpin
        height="80"
        width="80"
        color="#0f62fe"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
