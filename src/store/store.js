import {create} from 'zustand';
import { devtools,persist } from 'zustand/middleware';

let settingStore = (set) => ({
        dark: false,
        sidebar:"big",
        toggleDarkMode: () => set((state) => ({dark: !state.dark})),
        setSidebar: (sidebar) => set({sidebar}),
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
