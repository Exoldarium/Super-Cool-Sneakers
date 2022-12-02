import styled from 'styled-components';
import AvatarImage from '../images/image-avatar.JPG';

const Avatarstyles = styled.div`
  cursor: pointer;
  .avatar {
    border: 1px solid black;
    border-radius: 30px;
    height: 45px;
    width: 45px;
  }
  .avatar:hover {
    border: 2px solid;
    border-color: var(--orange);
  }
`;

export default function Account() {
  return (
    <Avatarstyles>
      <img src={AvatarImage} alt="avatar" className="avatar"/>
    </Avatarstyles>
  )
}