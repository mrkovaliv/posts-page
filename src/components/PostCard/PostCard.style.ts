import styled from 'styled-components';

interface IWrapperProps {
  greyscale: boolean;
}

export const Wrapper = styled.div<IWrapperProps>`
  background-color: #515152;
  border-radius: 15px;
  max-width: 350px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  filter: ${({ greyscale }) => (greyscale ? 'grayscale(1)' : 'none')};
`;

export const Title = styled.div`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
`;

export const BodyText = styled.div`
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 10px 15px;
  color: #fff;
  background-color: #910a60;
  border-radius: 10px;
  border: 1px solid #fff;
  outline: none;
`;
