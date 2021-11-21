import * as React from 'react';
import { View } from 'react-native';
import { Button, Input, Card, Text } from 'react-native-elements';
import { useMutation } from 'react-query';

import { register } from '../service';
import styles from '../styles';

function RegisterScreen({ navigation }) {
    const [email, setEmail] = React.useState("")
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [confirmPassword, setConfirmPassword] = React.useState("")

    const mutation = useMutation(register, {
        onSuccess: () => {
            navigation.navigate("Login");
        }
    })

    return (
        <View style={styles.container}>
            <Card>
                <Text h3 style={styles.title}>Register</Text>
                {mutation.isError && <Text style={styles.errorText}>An error occurred: {mutation.error.message}</Text>}
                <Input
                    placeholder='Email'
                    keyboardType="email-address"
                    onChangeText={text => setEmail(text)}
                />
                <Input
                    placeholder='Username'
                    onChangeText={text => setUsername(text)}
                />
                <Input
                    placeholder='Password'
                    secureTextEntry
                    onChangeText={text => setPassword(text)}
                />
                <Input
                    secureTextEntry
                    placeholder='Confirm Password'
                    onChangeText={text => setConfirmPassword(text)}
                />
                <Button title="Register"
                    onPress={() => mutation.mutate({
                        email, username, password, confirmPassword
                    })}
                    disabled={!username || !email || !password || password !== confirmPassword}
                    style={{ marginVertical: 4 }}
                    loading={mutation.isLoading}
                />
                <Button title="Login"
                    onPress={() => navigation.navigate("Login")}
                />
            </Card>
        </View>
    )
}

export default RegisterScreen;