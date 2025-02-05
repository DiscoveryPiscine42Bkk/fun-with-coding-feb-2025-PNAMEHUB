#!/bin/bash

if [ $# -eq 0 ]
then
	echo 'No arguments supplied'
elif [ $# -le 3 ]
then
	for x in "$@"
	do
		echo "$x"
	done
else
	echo '3 arguments is maximum'
fi
