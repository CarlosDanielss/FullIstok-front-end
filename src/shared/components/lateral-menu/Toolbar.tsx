import { Drawer, Box, useTheme, Avatar, Divider, List, ListItemButton, ListItemIcon, Icon, ListItemText } from '@mui/material';
import { useAppThemeContext } from '../../contexts/ThemeContext';


interface IListItemLinkProps{
  label : string,
  icon: string,
}


const ListItemLink : React.FC<IListItemLinkProps> = ({label, icon}) => {
  return(
    <ListItemButton>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label}/>
    </ListItemButton>
  );
};


const Toolbar: React.FC = () => {
  const theme = useTheme();

  const {themeName, toogleTheme} = useAppThemeContext();

  return (
    <>
      <Drawer variant='permanent'>
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
            <List>
              <ListItemLink
                label='Pagina inicial'
                icon= 'home'
              />
            </List>
          </Box>
          <Box>
            <List>
              <ListItemButton onClick={toogleTheme}>
                <ListItemIcon>
                  <Icon>{themeName === 'dark' ? 'dark_mode' : 'light_mode' }</Icon>
                </ListItemIcon>
                <ListItemText primary='Alterar Tema'/>
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Toolbar;