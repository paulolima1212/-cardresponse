import { createContext, useContext, useState } from "react";


const CardContext = createContext({});

export function CardContextProvider({children}: any) {
    
    const [modalVisible, setModalVisible] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalContent, setModalContent] = useState('');

    return(
        <div>
            <CardContext.Provider value={
                    {setModalVisible, modalVisible, setModalContent,  setModalTitle,modalContent,modalTitle}
            }>
                {children}
            </CardContext.Provider>
        </div>
    )
}

export function useCardContext() {
    return useContext(CardContext)
}
