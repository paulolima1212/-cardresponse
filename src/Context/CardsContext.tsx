import { createContext, useContext, useState } from "react";

interface CardContextTypes {
    setModalVisible: () => boolean
    modalVisible: boolean
    setModalContent: () => void
    setModalTitle: () => void
    modalContent: string
    modalTitle: string
}

const CardContext = createContext<CardContextTypes | {}>({});

export function CardContextProvider({children}: {children: JSX.Element}) {
    
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
