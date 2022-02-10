import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Link,
  Img
} from '@chakra-ui/react'

interface ModalViewImageProps {
  isOpen: boolean
  onClose: () => void
  imgUrl: string
}

export function ModalViewImage ({
  isOpen,
  onClose,
  imgUrl
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset='slideInBottom'
    >
      <ModalOverlay />
      <ModalContent bg='pGray.800' >
        <ModalBody p={0}>
          <Img count={2} maxWidth={900} maxHeight={600} src={imgUrl} objectFit='cover' />
        </ModalBody>
        <ModalFooter borderRadius='0px 0px 6px 6px' justifyContent='flex-start' p='8px'>
          <Link href={imgUrl} isExternal>Abrir original</Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
