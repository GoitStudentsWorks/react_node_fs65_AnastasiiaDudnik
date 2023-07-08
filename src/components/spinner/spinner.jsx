import { RotatingLines } from 'react-loader-spinner';
import { SpinnerStyled } from './spinner.styled';
import { colorsLight } from '../../components/variables/colors';

export default function Spinner() {
  return (
    <SpinnerStyled>
      <RotatingLines
        strokeColor={`${colorsLight.accentBackgroundColor}`}
        strokeWidth="5"
        animationDuration="0.75"
        width="150"
        visible={true}
      />
    </SpinnerStyled>
  );
}
