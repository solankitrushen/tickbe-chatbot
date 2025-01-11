'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarIcon } from 'lucide-react';

const formSchema = z.object({
  subEntityName: z.string().min(2, {
    message: 'Sub Entity Name must be at least 2 characters.'
  }),
  description: z.string().min(10, {
    message: 'Description must be at least 10 characters.'
  }),
  timingAndDate: z.date({
    required_error: 'Please select a date.'
  }),
  totalNoSeat: z.number().min(1, {
    message: 'Total No. Seat must be at least 1.'
  }),
  remainingNoSeat: z.number().min(0, {
    message: 'Remaining No. Seat must be 0 or greater.'
  }),
  revenue: z.string().min(1, {
    message: 'Revenue is required.'
  })
});

export function SubEntityForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subEntityName: '',
      description: '',
      timingAndDate: undefined,
      totalNoSeat: 0,
      remainingNoSeat: 0,
      revenue: ''
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-gray-200 mb-1">Sub Entity Name</label>
          <input
            type="text"
            {...form.register('subEntityName')}
            placeholder="Enter sub entity name"
            className="w-full p-2 bg-black text-white border border-gray-700  rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {form.formState.errors.subEntityName && (
            <p className="text-red-400 text-sm mt-1">
              {form.formState.errors.subEntityName.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-gray-200 mb-1">Description</label>
          <textarea
            {...form.register('description')}
            placeholder="Enter description"
            className="w-full p-2 bg-black text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          {form.formState.errors.description && (
            <p className="text-red-400 text-sm mt-1">
              {form.formState.errors.description.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-gray-200 mb-1">Timing and Date</label>
          <div className="relative">
            <ReactDatePicker
              selected={form.watch('timingAndDate')}
              onChange={(date) => form.setValue('timingAndDate', date)}
              className="w-full p-2 bg-black text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholderText="Pick a date"
              dateFormat="P"
            />
            <CalendarIcon className="absolute top-1/2 right-4 transform -translate-y-1/2 h-4 w-4 opacity-50" />
          </div>
          {form.formState.errors.timingAndDate && (
            <p className="text-red-400 text-sm mt-1">
              {form.formState.errors.timingAndDate.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-gray-200 mb-1">Total No. Seat</label>
          <input
            type="number"
            {...form.register('totalNoSeat')}
            placeholder="Enter total number of seats"
            className="w-full p-2 bg-black text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {form.formState.errors.totalNoSeat && (
            <p className="text-red-400 text-sm mt-1">
              {form.formState.errors.totalNoSeat.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-gray-200 mb-1">Remaining No. Seat</label>
          <input
            type="number"
            {...form.register('remainingNoSeat')}
            placeholder="Enter remaining number of seats"
            className="w-full p-2 bg-black text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {form.formState.errors.remainingNoSeat && (
            <p className="text-red-400 text-sm mt-1">
              {form.formState.errors.remainingNoSeat.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-gray-200 mb-1">Revenue</label>
          <input
            type="text"
            {...form.register('revenue')}
            placeholder="Enter revenue"
            className="w-full p-2 bg-black text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {form.formState.errors.revenue && (
            <p className="text-red-400 text-sm mt-1">
              {form.formState.errors.revenue.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-white text-black rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
