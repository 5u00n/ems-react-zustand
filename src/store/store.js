import {create} from 'zustand';
import { devtools,persist } from 'zustand/middleware';

let settingStore = (set) => ({
        dark: false,
        sidebar:true,
        toggleDarkMode: () => set((state) => ({dark: !state.dark})),
        toggleSidebar: () => set( (state) => ({sidebar: !state.sidebar})),
    }
);

let peopleStore = (set) => ({
    people : ['John Doe', 'Jane Doe'],
        addPerson: (person) => set((state) => ({people: [...state.people, person]})),
        deletePerson: (person) => set((state) => ({people: state.people.filter(p => p !== person)})),
        editPerson: (oldPerson, newPerson) => set((state) => ({people: state.people.map(p => p === oldPerson ? newPerson : p)})),
        clearPeople: () => set({people: []}),
});


settingStore= persist(devtools(settingStore), {name: 'setting-storage'});

peopleStore=devtools(peopleStore);


export const useSettingStore = create(settingStore);
export const usePeopleStore = create(peopleStore);
