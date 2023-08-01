'use client'

import { CiChat1 } from "react-icons/ci";
import { Button as Button_SC} from "./styles"

function ChatButtonOrganism() {
    return (
        <Button_SC data-testid="BtnSC">
            <CiChat1 />
        </Button_SC>
    )
};

export default ChatButtonOrganism