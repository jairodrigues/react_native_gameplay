import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { theme } from '../../global/styles/theme';

export function SignIn() {
	return(
		<View style={styles.container}>
			<Image
				source={IllustrationImg}
				style={styles.image}
				resizeMode='stretch'
			/>
			<View style={styles.content}>
				<Text style={styles.title}>
					Conect-se {'\n'}
					e organize suas {'\n'}
					jogatinas 	
				</Text>
				<Text style={styles.subtitle}>
					Crie grupos para jogar seus games {'\n'} 
					favoritos com seus amigos
				</Text>
				<ButtonIcon title="Entrar com discord" activeOpacity={0.7}/>
			</View>
		</View>
	
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: theme.colors.background
	},
	image: {
		width: '100%',
		height: 360,    
	},
	content: {    
		marginTop: -40,    
		paddingHorizontal: 50
	},
	title: {
		color: theme.colors.heading,
		textAlign: 'center',
		fontSize: 40,
		marginBottom: 16,   
	},
	subtitle: {
		color: theme.colors.heading,
		fontSize: 15,
		textAlign: 'center',
		marginBottom: 64
	  }
})