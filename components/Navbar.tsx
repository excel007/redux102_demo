'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import { counterSelector } from '@/store/slices/counterSlice'
type Props = {}

export default function Navbar({ }: Props) {
    const counterReducer = useSelector(counterSelector);
    return (
        <div>counter from Navbar component :
            
            {counterReducer.counter}
        </div>
    )
}