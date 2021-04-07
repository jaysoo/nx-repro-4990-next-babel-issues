import { Dropdown } from '@org/ui'

const Index = () => (
  <div>
    Reproduction for{' '}
    <a href="https://github.com/nrwl/nx/issues/4990">
      https://github.com/nrwl/nx/issues/4990
    </a>
    <br />
    <Dropdown
      name="Please select a value to change the above input"
      options={[
        { key: 'Marathon', value: 1 },
        { key: 'Sprint', value: 2 },
        { key: '5K Run', value: 3 },
        { key: '400m', value: 4 },
      ]}
      onSelect={(value) => console.log('You selected: ', value)}
    />
  </div>
)

export async function getServerSideProps() {
  return {
    props: {},
  }
}

export default Index
