#!/bin/bash

if [ $# -eq 0 ]
then
	echo 'No arguments supplied'
else
	for x in "$@"
	do
		mkdir "ex$x"
	done
fi
