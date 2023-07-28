import { useDisclosure } from '@mantine/hooks';
import { Modal, useMantineTheme } from '@mantine/core';
// import './profile-modal.css'
import PostShare from '../../PostShare/PostShare';

function ShareModal({modalOpened, setModalOpened}) {

    const theme = useMantineTheme();

  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={()=>setModalOpened(false)}
        title="Edit Profile"
        size="55%"
        overlayProps={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
      >
        <PostShare/>
      </Modal>
    </>
  );
}

export default ShareModal