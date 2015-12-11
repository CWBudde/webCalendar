@extends ('_layouts/default')

@section('content')

	<h2>Användare</h2>
	<table cellpadding="0" cellspacing="0">
		<thead>
		<tr>
			<th>Användarnamn</th>
			<th>E-postadress</th>
			<th>&nbsp;</th>
			<th>&nbsp;</th>
		</tr>
		</thead>
		<tbody>
		@if ($users)
			@foreach ($users as $user)
				<tr>
					<td>{!! link_to_route('admin.users.edit', $user->username, $user->id) !!}</td>
					<td>{{ $user->email }}</td>
					<td>{!! link_to_route('admin.users.edit', 'Redigera', $user->id) !!}</td>
					<td>
						@if ($user->id != Auth::user()->id)
							{!! Form::open(['route' => ['admin.users.destroy', $user->id], 'method' => 'DELETE']) !!}
							{!! Form::submit('Radera', ['class' => 'no-button']) !!}
							{!! Form::close() !!}
						@else
							&nbsp;
						@endif
					</td>
				</tr>
			@endforeach
		@else
			<tr>
				<td>Det finns inga användare i systemet.</td>
			</tr>
		@endif
		</tbody>
	</table>

	<p>
		{!! link_to_route('admin.users.create', 'Skapa ny användare', [], ['class' => 'button']) !!}
	</p>

@stop