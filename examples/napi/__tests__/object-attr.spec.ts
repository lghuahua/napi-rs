import test from 'ava'

import { NotWritableClass, shutdownRuntime } from '../index.cjs'

test.after(() => {
  shutdownRuntime()
})

test('Not Writable Class', (t) => {
  const obj = new NotWritableClass('1')
  t.throws(() => {
    obj.name = '2'
  })
  obj.setName('2')
  t.is(obj.name, '2')
  t.throws(() => {
    obj.setName = () => {}
  })
})
