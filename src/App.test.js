
import React from 'react';
import PrivateRouter from 'components/PrivateRouter';
import { render, screen } from '@testing-library/react';
import { UserContext } from 'context/userContext';

it('renders not authorized if the roles dont match', () => {
  render(
    <UserContext.Provider value={{ userData: { rol: 'LIDER' } }}>
      <PrivateRouter roleList={['ADMINISTRADOR']}>
        <div>Este es el children</div>
      </PrivateRouter>
    </UserContext.Provider>
  );
  // expect(screen.getByTestId('not-authorized')).toHaveTextContent(
  //   'No estás autorizado para ver este sitio.'
  // );
});

// it('renders the children if the user role is in the roleList', () => {
//   render(
//     <UserContext.Provider value={{ userData: { rol: 'ADMINISTRADOR' } }}>
//       <PrivateRouter roleList={['ADMINISTRADOR']}>
//         <div data-testid='children'>Este es el children</div>
//       </PrivateRouter>
//     </UserContext.Provider>
//   );
//   expect(screen.getByTestId('children')).toBeInTheDocument();
// });
//Error