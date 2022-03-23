import { Drawer, Box, useTheme, Avatar, Divider, List, ListItemButton, ListItemIcon, Icon, ListItemText, useMediaQuery } from '@mui/material';
import { useDrawerContext } from '../../contexts/DrawerContext';
import { useAppThemeContext } from '../../contexts/ThemeContext';


interface IListItemLinkProps {
  label: string,
  icon: string,
}


const ListItemLink: React.FC<IListItemLinkProps> = ({ label, icon }) => {
  return (
    <ListItemButton>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};


const LateralMenu: React.FC = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const { isDrawerOpen, toogleDrawerOpen } = useDrawerContext();
  const { themeName, toogleTheme } = useAppThemeContext();

  return (
    <>
      <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toogleDrawerOpen}>
        <Box
          width={theme.spacing(28)}
          height='100%'
          display='flex'
          flexDirection='column'
        >
          <Box
            width='100%'
            height={theme.spacing(20)}
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            <Avatar
              sx={{
                height: theme.spacing(12),
                width: theme.spacing(12)
              }}
              src="https://www.pacer.com.br/wp-content/uploads/2019/04/logistica-reversa-1.png"
            />
          </Box>
          <Divider />

          <Box flex={1}>
            <List component='nav'>
              <ListItemLink
                label='Pagina inicial'
                icon='home'
              />
            </List>
          </Box>
          <Box>
            <List component='nav'>
              <ListItemButton onClick={toogleTheme}>
                <ListItemIcon>
                  <Icon>{themeName === 'dark' ? 'dark_mode' : 'light_mode'}</Icon>
                </ListItemIcon>
                <ListItemText primary='Alterar Tema' />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};

export default LateralMenu;