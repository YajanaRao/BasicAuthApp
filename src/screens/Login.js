import * as React from 'react';
import { View } from 'react-native';
import { Button, Input, Card, Text } from 'react-native-elements';
import { useMutation } from 'react-query';
import { login } from '../service';
import styles from '../styles';


function LoginScreen({ navigation }) {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const mutation = useMutation(login, {
        onSuccess: () => {
            navigation.navigate("App");
        }
    })

    return (
        <View style={styles.container}>
            <Card>
                <Text h3 style={styles.title}>Login</Text>
                {mutation.isError && <Text style={styles.errorText}>An error occurred: {mutation.error.message}</Text>}
                <Input
                    placeholder='Username'
                    onChangeText={text => setUsername(text)}
                />
                <Input
                    placeholder='Password'
                    secureTextEntry
                    onChangeText={text => setPassword(text)}
                />
                <Button title="Login"
                 onPress={() => mutation.mutate({
                    username,
                    password
                })}
                    style={{ marginVertical: 4 }}
                    disabled={!username || !password}
                    loading={mutation.isLoading}
                />
                <Button title="Create an account"
                    onPress={() => navigation.navigate("Register")}                   
                />
            </Card>
        </View>
    )
}

export default LoginScreen;