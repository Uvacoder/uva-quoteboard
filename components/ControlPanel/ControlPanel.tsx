import * as React from 'react'
import cs from 'clsx'
import { Select } from '@chakra-ui/react'
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormControl,
  FormLabel,
  Divider,
  Button,
  Portal,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

import { Paper } from '~/components/Paper/Paper'
import { useEditorStore } from '~/lib/editor-store'

import styles from './styles.module.css'

const backgroundImages = [
  '/images/00.jpg',
  '/images/01.jpg',
  '/images/02.jpg',
  '/images/03.jpg',
  '/images/04.jpg',
  '/images/05.jpg',
  '/images/06.jpg',
  '/images/07.jpg',
  '/images/08.jpg',
  '/images/09.jpg',
  '/images/10.jpg',
  '/images/11.jpg',
  '/images/12.jpg',
  '/images/13.jpg',
  '/images/14.jpg',
  '/images/15.jpg',
  '/images/16.jpg',
  '/images/17.jpg',
  '/images/18.jpg',
  '/images/19.jpg',
  '/images/20.jpg'
]

const fontFamilies = [
  'Inter',
  'Roboto',
  'Open Sans',
  'Lato',
  'Montserrat',
  'Oswald',
  'Source Sans Pro',
  'Raleway',
  'Merriweather',
  'Noto Sans',
  'Noto Sans Japanese',
  'Noto Sans Korean',
  'Noto Sans Traditional Chinese',
  'Nunito',
  'Nunito Sans',
  'Prompt',
  'Poppins',
  'Ubuntu',
  'Quicksand',
  'Noto Serif',
  'Source Code Pro',
  'PT Sans',
  'Work Sans',
  'Mukta'
].sort()

export const ControlPanel: React.FC<{ className?: string }> = ({
  className
}) => {
  const { config, updateConfig } = useEditorStore()

  return (
    <Paper className={cs(styles.container, className)}>
      <div className={styles.options}>
        <FormControl>
          <FormLabel htmlFor='select-backround-image'>
            Background Image
          </FormLabel>

          <Select
            id='select-background-image'
            placeholder='None'
            value={config.background}
            size='sm'
            onChange={(event) => {
              updateConfig({ background: event.target.value })
            }}
          >
            {backgroundImages.map((image) => (
              <option key={image} value={image}>
                {image}
              </option>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor='select-font-family'>Font</FormLabel>

          <Select
            id='select-font-family'
            placeholder='System'
            value={config.fontFamily}
            size='sm'
            onChange={(event) => {
              updateConfig({ fontFamily: event.target.value })
            }}
          >
            {fontFamilies.map((fontFamily) => (
              <option key={fontFamily} value={fontFamily}>
                {fontFamily}
              </option>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor='input-font-size'>Font Size</FormLabel>

          <NumberInput
            id='input-font-size'
            value={`${config.fontSize}`}
            min={8}
            max={128}
            onChange={(value) => {
              const parsedValue = parseInt(value)
              if (parsedValue) {
                updateConfig({ fontSize: parsedValue })
              }
            }}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor='input-padding'>Padding</FormLabel>

          <NumberInput
            id='padding'
            value={`${config.padding}`}
            min={-1}
            max={64}
            onChange={(value) => {
              const parsedValue = parseInt(value)
              if (parsedValue) {
                updateConfig({ padding: parsedValue })
              }
            }}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

        <Divider orientation='vertical' />

        <FormControl>
          <FormLabel htmlFor='menu-export'>Export</FormLabel>

          <Menu id='menu-export'>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Export
            </MenuButton>

            <Portal>
              <MenuList>
                <MenuItem>Save png</MenuItem>
                <MenuItem>Save jpeg</MenuItem>
                <MenuItem>Save svg</MenuItem>
                <MenuItem>Copy png</MenuItem>
                <MenuItem>Copy URL</MenuItem>
              </MenuList>
            </Portal>
          </Menu>
        </FormControl>
      </div>
    </Paper>
  )
}