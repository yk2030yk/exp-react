import { atomFamily, atom, selector } from 'recoil'

export type Profile = {
  name: string
  strengths: string
}

export const selectedId = atom<string>({
  key: 'selectedId',
  default: '',
})

export const modalState = atom<boolean>({
  key: 'modalState',
  default: false,
})

export const profileIdsState = atom<string[]>({
  key: 'profileIdsState',
  default: [],
})

export const profileWithIdState = atomFamily<Profile, string>({
  key: `profileWithIdState`,
  default: {
    name: '',
    strengths: '',
  },
})

export const selectedProfileState = selector({
  key: 'selectedProfileState',
  get: ({ get }) => {
    const id = get(selectedId)
    const item = get(profileWithIdState(id))
    return item
  },
})
