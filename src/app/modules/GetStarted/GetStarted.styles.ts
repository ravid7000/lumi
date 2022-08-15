import Paper from 'atoms/Paper';
import styled from 'styled-components';

export const Root = styled(Paper)`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
`;

export const Container = styled(Paper)`
  width: 800px;
  max-width: 100%;
`;

export const ListRoot = styled.div`
  position: relative;
  max-height: 100%;
  overflow-y: auto;
  flex: 0 0 200px;
  max-width: 200px;
  min-height: 100px;
  padding: ${({ theme }) => theme.spacing.toPoint('l')};
  border-right: 1px solid ${({ theme }) => theme.colors.neutral[100]};
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const ListItem = styled.li`
  margin: 0;
  padding: ${({ theme }) => theme.spacing.toPoint('2', '0')};
`;

export const ListItemButton = styled.button`
  border: 0;
  background: none;
  box-shadow: none;
  padding: ${({ theme }) => theme.spacing.toPoint('s', 'm')};
  border-radius: ${({ theme }) => theme.radius.s}px;
  display: inline-flex;
  width: 100%;
  transition: ${({ theme }) =>
    theme.transition.getTrans('background', 'medium')};

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[50]};
  }
`;

export const UserSavedRoot = styled.div`
  flex: 1;
  max-width: 100%;
  padding: ${({ theme }) => theme.spacing.l}px;
`;
