import React from 'react';
import { TouchableOpacity, Image, View, StyleSheet, Text, TouchableOpacityProps } from 'react-native';
import DiscordImg from '../assets/discord.png'
import { theme } from '../global/styles/theme';

type Props = TouchableOpacityProps & {
	title: string;
}

export function ButtonIcon({ title, ...rest}: Props) {
	return (
		<TouchableOpacity style={styles.container} {...rest}>
			<View style={styles.iconWrapper}>
				<Image source={DiscordImg} style={styles.icon} />
			</View>
			<Text style={styles.title}>
				{ title }
			</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 56,
		backgroundColor: theme.colors.primary,
		borderRadius: 8,
		flexDirection: 'row',
		alignItems: 'center'
	  },
	  title: {
		flex: 1,
		color: theme.colors.heading,
		fontSize: 15,
		textAlign: 'center',    
	  },
	  iconWrapper: {
		width: 56,
		height: 56,
		justifyContent: 'center',
		alignItems: 'center',
		borderRightWidth: 1,
		borderColor: theme.colors.line
	  },
	  icon: {
		width: 24,
		height: 18
	  }
})