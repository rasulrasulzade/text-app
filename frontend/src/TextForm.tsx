import LoadingButton from "@mui/lab/LoadingButton";
import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import TextField from '@mui/material/TextField';
import { Fragment, useState } from "react";

import { saveText } from "./actions";
import { TextFormProps } from "./types";

const TextForm: React.FC<TextFormProps> = (props: { fetchList: Function }) => {
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSaveOnClick = async () => {
        if (!isLoading) {
            setIsLoading(true);
            try {
                await saveText(inputValue);
                setInputValue('');
                props.fetchList()
            } catch (error) {
                console.error('Error saving text:', error);
            }
            setIsLoading(false);
        }
    }

    return (
        <Fragment>
            <Stack direction="row" spacing={4} sx={{ marginTop: "20px", marginBottom: "20px" }}>
                <Box
                    sx={{
                        width: "100%"
                    }}
                >
                    <TextField fullWidth label="Enter text" id="fullWidth"
                               value={inputValue}
                               onChange={(e) => setInputValue(e.target.value)} />
                </Box>

                <LoadingButton
                    loading={isLoading}
                    loadingPosition="center"
                    variant="contained"
                    onClick={handleSaveOnClick}
                    disabled={inputValue.length === 0}
                >
                    Save
                </LoadingButton>
            </Stack>
        </Fragment>
    );
}

export default TextForm;