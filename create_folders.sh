#!/bin/bash

names=(APSODE dohan8476 hsinhuk HyeongGyun04 Ilwnla jinwoopark5889 KminKyu Neun99 tnzldaos U_nyeong)

for name in "${names[@]}"; do
  mkdir -p "$name"
  touch "$name/$name"
done
