import { motion } from 'framer-motion'
import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'

const DropMenuList = styled(motion.div)`
  display: flex;
  padding: 5px 0;
  flex-direction: column;
  position: absolute;
  top: 28px;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 8px 8px;
  z-index: 1000;
  width: calc(100% + 16px);
  left: -8px;
  a,
  a:hover,
  a:active,
  a:visited {
    cursor: pointer;
    color: #000;
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
    text-decoration: none;
    padding: 9px 10px;
    transition: background-color 0.3s ease;
    border-bottom: 1px solid #f0f0f0;

    &:last-child {
      border-bottom: none;
    }
  }
`

const Down = () => (
  <svg
    width="11"
    height="8"
    viewBox="0 0 11 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.1612 0.433105H9.15673C9.08843 0.433105 9.02415 0.466588 8.98397 0.521498L5.17906 5.76614L1.37414 0.521498C1.33397 0.466588 1.26968 0.433105 1.20138 0.433105H0.196912C0.109859 0.433105 0.0589657 0.532213 0.109859 0.603195L4.83218 7.11346C5.00361 7.34918 5.3545 7.34918 5.52459 7.11346L10.2469 0.603195C10.2991 0.532213 10.2483 0.433105 10.1612 0.433105Z"
      fill="black"
      fillOpacity="0.25"
    />
  </svg>
)

const Up = () => (
  <svg
    width="11"
    height="8"
    viewBox="0 0 11 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.2484 7.12016L5.52611 0.609891C5.35468 0.374177 5.00379 0.374177 4.8337 0.609891L0.11004 7.12016C0.0984157 7.13617 0.091452 7.15509 0.0899209 7.17481C0.0883898 7.19454 0.0923511 7.21431 0.101366 7.23192C0.110381 7.24953 0.124096 7.26431 0.140993 7.2746C0.15789 7.2849 0.177308 7.29031 0.197094 7.29025H1.20156C1.26986 7.29025 1.33415 7.25677 1.37433 7.20186L5.17924 1.95721L8.98415 7.20186C9.02433 7.25677 9.08861 7.29025 9.15692 7.29025H10.1614C10.2484 7.29025 10.2993 7.19114 10.2484 7.12016Z"
      fill="black"
      fillOpacity="0.25"
    />
  </svg>
)

interface IDropdown {
  name: string
  options: {
    key: string
    value: string | number | object
  }[]
  defaultKey?: string
  onSelect: Function
  selectedKey?: string
}

const Dropdown: FC<IDropdown> = ({
  defaultKey,
  name,
  options,
  onSelect,
  selectedKey,
}) => {
  const [isOpen, setOpen] = useState(false)
  const [key, selectKey] = useState(selectedKey ?? defaultKey)

  const values = options.map(({ key, value }, i) => (
    <a
      key={i}
      onClick={() => {
        onSelect(value)
        selectKey(key)
        setOpen(false)
      }}
    >
      {key}
    </a>
  ))

  const variants = {
    open: { opacity: 1, display: 'flex' },
    closed: { opacity: 0, transitionEnd: { display: 'none' } },
  }

  useEffect(() => {
    if (selectedKey) {
      selectKey(selectedKey)
    }
  }, [selectedKey])

  return (
    <div onClick={() => setOpen(!isOpen)}>
      {key ? key : <div>{name}</div>} {isOpen ? <Up /> : <Down />}
      <DropMenuList animate={isOpen ? variants.open : variants.closed}>
        {values}
      </DropMenuList>
    </div>
  )
}

export { Dropdown }
